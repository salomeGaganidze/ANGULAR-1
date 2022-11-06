export interface PersonTp
{
    name:  string,
    isStudent: boolean,
    email: string,
    address: AddressTp 
} ; 


export interface AddressTp
{
        street: string,
        suite: string,
        city: string,
        zipcode: string
}; 