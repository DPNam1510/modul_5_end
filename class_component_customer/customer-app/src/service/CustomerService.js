
const customerList = [
    {id: 1, idNumber:123, name: "Nam", address: "Nghệ An", type: "VIP"},
    {id: 2, idNumber:456, name: "Vi", address: "Gia Lai", type: "VIP"},
    {id: 3, idNumber:789, name: "Khánh", address: "Đà Nẵng", type: "VIP"}
]
export function getAll(){
    return customerList;
}
export function deleteById(id){
    for(let i=0;i<customerList.length;i++){
        if(customerList[i].id === id){
            customerList.splice(i,1);
            break;
        }
    }
}