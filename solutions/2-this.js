// BEGIN
const make = (numer, denom) => {
    return {
        numer,
        denom,
        setNumer(num) {
            this.numer = num
        },
        setDenom(num) {
            this.denom = num
        },
        getNumer() {
            return this.numer
        },
        getDenom() {
            return this.denom
        },
        toString() {
            return `${this.numer}/${this.denom}`
        },
        add(num) {
            let n = this.numer * num.getDenom() + this.denom * num.getNumer()
            let d = this.denom * num.getDenom()
            return make(n, d)
        }
    }
}
export default make
// END