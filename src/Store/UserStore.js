import {observable} from "mobx"

class UserStore {
    @observable totalScore = "";
    @observable filter = "";
    @observable phoneNumber = "";
    @observable token = "";
    @observable rank = "";


    setTotalScore (value)
    {
        this.totalScore = value
    }
    setPhoneNumber (value)
    {
        this.phoneNumber = value
    }
    setToken(value)
    {
        this.token = value
    }
    setRank(value)
    {
        this.rank = value
    }
}
const store  = new UserStore();
export default store ;
