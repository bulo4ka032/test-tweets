import { useEffect, useState } from 'react';
import { getUsers, updateUser } from 'services/mockAPI';
// import { useLocalStorage } from "hooks/useLocalStorage"
import GoBack from 'components/GoBack/GoBack';
import Filter from 'components/Filter/Filter';
import TweetsList from 'components/TweetsList/TweetsList';
import LoadMore from 'components/LoadMore/LoadMore';
const Tweets = () => {
  // const [users, setUsers] = useLocalStorage('users', []);
  const [users, setUsers] = useState([]);

  // const [filter, setFilter] = useLocalStorage('filter', ['Show all']);
  const [filter, setFilter] = useState('Show all');

  // const [followings, setFollowings] = useLocalStorage('followers', []);
  const [followings, setFollowings] = useState([]);

  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(90);
  const [limits, setLimits] = useState()
  const [isLoading, setIsLoading] = useState(false);
  // const [isOffsetPage, setIsOffsetPage] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      const usersApi = await getUsers(page);
      console.log(users);

      setUsers(prevUsers => {
        const newUsers = usersApi.map(user => {
          return followings.includes(user.id)
            ? { ...usersApi, isFollow: true }
            : { ...users, isFollow: false };
        });
        const sumUsers = prevUsers.filter(
          firstValue =>
            !users.some(secondValue => firstValue.id === secondValue.id)
        );
        return [...sumUsers, ...newUsers];
      });

      setIsLoading(false);
    };
    fetchUsers();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleFollow = async userId => {
    setFollowings(prevFollowings => {
      const index = prevFollowings.indexOf(userId);
      setUsers(prevUsers => prevUsers.map(user => {
        if (user.id === userId) {
            user.isFollow = !user.isFollow;
            user.followers = user.isFollow ? user.followers + 1 : user.followers - 1;
        } 
        return users;
      })) 
      if(index === -1) return [...prevFollowings, userId];
      prevFollowings.splice(index, 1)
      return prevFollowings

    });
    const [user] = users.filter(user => user.id === userId);
    updateUser(userId, user.followers)
  };

  const handleFilter = (value, handleClose, setSelectedItem) => {
setFilter(value);
setSelectedItem(value);
setPage(1);
setLimits(3);
handleClose(null);

if(value === 'Follow') setTotalHits(90 - followings.length);
if(value === 'Following') setTotalHits(followings.length);
if(value === 'Show all') setTotalHits(90);
  }

  const handleChangePage = () => {
    setPage(prevPage => prevPage + 1);
    setLimits(prevLimits => prevLimits + 3);
    setTotalHits(prevTotalHits => prevTotalHits - limits)
  }

  const filteredUsers = users.filter(user => {
    if (filter === 'Follow') return !user.isFollow;
    if (filter === 'Followings') return user.isFollow;
    return user;
  }).sort((a, b) => a.id - b.id).splice(0, limits)

  return (
    <div>
      <div>
        <GoBack />
        <Filter value={filter} resetPage={setPage} onChange={handleFilter}/>
      </div>
      {users && <TweetsList users={filteredUsers} onClick={handleFollow}/>}
      {totalHits > 3 && <LoadMore onClick={handleChangePage} loading={isLoading}/>}
    </div>
  );
};

export default Tweets;
