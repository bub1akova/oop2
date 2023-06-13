// BEGIN
const magic = (...args) => {
    const innerSum = (...innerArgs) => {
        const newArgs = [...args, ...innerArgs]
        return magic(...newArgs)
      }
      innerSum.toString = () => args.reduce((acc, curr) => acc + curr, 0)
      return innerSum
};
  export default magic
// END
