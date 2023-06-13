// BEGIN
export const getMutualFriends = (one, two) => {
  const mutualFriends = [];
  const oneFriends = one.getFriends();
  const idOfTwoFriends = new Set(two.getFriends().map(i => i.id));
  oneFriends.forEach(item => {
      if (idOfTwoFriends.has(item.id)) mutualFriends.push(item)
  });
  return mutualFriends;
}
// END
export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});