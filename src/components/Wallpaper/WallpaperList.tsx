import {useInfiniteQuery} from '@tanstack/react-query';
import {Text, FlatList} from 'react-native';
import {fetchWallpapers} from '../../services/api/queries';
import {AxiosError, AxiosResponse} from 'axios';
import {WallpaperApiResponseT} from '../../types';
import Spinner from '../Layout/Spinner';
import {colors} from '../../theme';
import defaultStyles from '../../style';
import WallpaperFlatList from './WallpaperFlatList';
import {common} from '../../constants';
import EmptyWallpaper from './EmptyWallpaper';
import ErrorMsg from '../Design/ErrorMsg';

type CProps = {
  category?: string;
  search?: string;
};

const per_page = 4;

const WallpaperList = ({category, search}: CProps) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    error,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery<AxiosResponse<WallpaperApiResponseT>, AxiosError>({
    queryKey: ['WALLPAPER', category, search],
    initialPageParam: 1,
    queryFn: ({pageParam = 1}) =>
      fetchWallpapers({page: pageParam as any, per_page, category, q: search}),
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.data.totalHits / per_page);
      return allPages.length + 1 <= totalPages
        ? allPages.length + 1
        : undefined;
    },
    retry: 1,
  });

  if (isLoading && !isFetchingNextPage) {
    return <Spinner size={40} color={colors.WARNING_COLOR} />;
  }

  if (error) {
    return <ErrorMsg message={error.message} />;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      data={data?.pages}
      ListHeaderComponent={() => {
        return (
          <Text
            style={[
              defaultStyles.lightText,
              {marginVertical: 8, alignSelf: 'flex-end'},
            ]}>
            Total Results{' '}
            {data?.pages.length ? data?.pages[0].data.totalHits : 0}
          </Text>
        );
      }}
      keyExtractor={(_item, index) => `${index}`}
      onEndReachedThreshold={0.4}
      onEndReached={() => fetchNextPage()}
      maxToRenderPerBatch={4}
      initialNumToRender={4}
      ListEmptyComponent={() => <EmptyWallpaper />}
      ListFooterComponent={() => {
        return isFetchingNextPage ? (
          <Spinner size={40} />
        ) : !hasNextPage ? (
          <Text
            style={[defaultStyles.secondaryTitle, defaultStyles.textCenter]}>
            No More Wallpapers!
          </Text>
        ) : (
          <Text></Text>
        );
      }}
      getItemLayout={(_data, index) => ({
        length: common.WALLPAPER_HEIGHT,
        offset: common.WALLPAPER_HEIGHT * index,
        index,
      })}
      renderItem={({item: group}) => (
        <WallpaperFlatList data={group.data.hits} />
      )}
    />
  );
};

export default WallpaperList;
