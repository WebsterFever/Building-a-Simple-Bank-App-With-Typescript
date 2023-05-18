import { CompanyAccount } from './class/CompanyAccount'
import{DioAccount} from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Webs', 10)
peopleAccount.deposit()

const companyAccount: CompanyAccount = new CompanyAccount('Dio' ,20)
companyAccount.deposit()
