import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import RadioButton from '../components/radioButton';
import Divider from '../components/divider';
import User from '../components/user';
import {useListCustomers} from '../hooks/useListCustomers';

const UserListScreen = () => {
  const [roleFilter, setRoleFilter] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filter = {
    ...(roleFilter && {role: {eq: roleFilter}}),
    ...(searchTerm && {name: {contains: searchTerm}}),
  };

  const {data, loading, error, loadMore, refetch} = useListCustomers(filter);

  const switchRole = (roleName: string) => {
    setRoleFilter(prevRole => (prevRole === roleName ? '' : roleName));
  };

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search by name"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
      />
      <Divider />
      <View style={styles.filterContainer}>
        <Text style={styles.title}>User Types</Text>

        <RadioButton
          title="Admin"
          checked={roleFilter === 'ADMIN'}
          onPress={() => switchRole('ADMIN')}
        />
        <RadioButton
          title="Manager"
          checked={roleFilter === 'MANAGER'}
          onPress={() => switchRole('MANAGER')}
        />
      </View>

      <Divider />

      <View style={styles.filterContainer}>
        <Text style={styles.title}>{`${
          roleFilter ? roleFilter : 'All'
        } Users`}</Text>

        <FlatList
          data={data?.items}
          keyExtractor={item => item.id}
          refreshing={loading}
          onRefresh={refetch}
          onEndReached={loadMore}
          renderItem={({item}) => <User data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 5,
  },
  filterContainer: {
    display: 'flex',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export default UserListScreen;
