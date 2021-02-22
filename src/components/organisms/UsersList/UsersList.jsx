import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {FlatList, Text} from 'react-native';
import {UserItem} from 'components/atoms';

import {GET_USERS_REQUESTED} from '@redux/actions/usersActions';

const UsersList = ({users: {loading, users}, getUsers}) => {
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading && <Text>Loading...</Text>}
      {!loading && (
        <FlatList
          data={users}
          renderItem={({item}) => <UserItem name={item.name} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>Nothing to show</Text>}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch({type: GET_USERS_REQUESTED}),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
