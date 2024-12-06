import { gql, useQuery } from '@apollo/client';

export const LIST_CUSTOMERS = gql`
  query ListZellerCustomers(
    $filter: TableZellerCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZellerCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;

export const useListCustomers = (filter?: any, limit: number = 10) => {
  const { data, loading, error, fetchMore, refetch } = useQuery(LIST_CUSTOMERS, {
    variables: { filter: Object.keys(filter).length ? filter : null, limit },
  });

  const loadMore = () => {
    if (data?.listZellerCustomers?.nextToken) {
      fetchMore({
        variables: { nextToken: data.listZellerCustomers.nextToken },
      });
    }
  };

  return { data: data?.listZellerCustomers, loading, error, refetch, loadMore };
};
