const express= require('express');
const router = express.Router()

const lists=[
{id:1,name:"Harry",speciality:"Dentist",area:"Los Angeles",phoneNo:"213123123",score:4.3},
{id:2,name:"Sam",speciality:"Dentist",area:"Los Angeles",phoneNo:"313123123",score:4.1},
{id:3,name:"Susan",speciality:"Dermatologist",area:"San Diego",phoneNo:"413123123",score:2.3},
{id:4,name:"Smith",speciality:"Cardiologist",area:"New York",phoneNo:"613123123",score:3.9},
{id:5,name:"Jane",speciality:"Dermatologist",area:"San Diego",phoneNo:"293521323",score:2.1},
{id:6,name:"John",speciality:"Psychiatrist",area:"Los Angeles",phoneNo:"133623126",score:4.9},
{id:7,name:"Markus",speciality:"Cardiologist",area:"New York",phoneNo:"213123123",score:5.0},
{id:8,name:"Alan",speciality:"Psychiatrist",area:"San Diego",phoneNo:"213123123",score:2.7},
{id:9,name:"Chuck",speciality:"Dermatologist",area:"Los Angeles",phoneNo:"213123123",score:1.5},
{id:10,name:"Elen",speciality:"Psychiatrist",area:"Los Angeles",phoneNo:"213123123",score:3.9},
{id:11,name:"Sophie",speciality:"Cardiologist",area:"New York",phoneNo:"213123123",score:2.9},
{id:12,name:"Sue",speciality:"Dentist",area:"San Diego",phoneNo:"213123123",score:1.8},
{id:13,name:"Vivek",speciality:"Psychiatrist",area:"Los Angeles",phoneNo:"213123123",score:1.2},
{id:14,name:"Rish",speciality:"Dermatologist",area:"Los Angeles",phoneNo:"213123123",score:4.6},
{id:15,name:"Chirag",speciality:"Cardiologist",area:"Los Angeles",phoneNo:"213123123",score:4.3},
{id:16,name:"Patel",speciality:"Dentist",area:"San Diego",phoneNo:"213123123",score:4.3},
{id:17,name:"Kumar",speciality:"Dentist",area:"San Diego",phoneNo:"213123123",score:4.3},
{id:18,name:"Harry",speciality:"Dermatologist",area:"San Diego",phoneNo:"213123123",score:4.3},
{id:19,name:"Mark",speciality:"Dermatologist",area:"New York",phoneNo:"213123123",score:2.9},
{id:20,name:"Mike",speciality:"Dentist",area:"Los Angeles",phoneNo:"213123123",score:4.3}
]
//console.log("YES");
router.get('/home',(req,res,next)=>{
    //console.log("YES");
    res.send(lists);
})

router.get('/details/:id',(req,res,next)=>{
    const id = req.params.id;

    lists.forEach(item =>{
        if(id == item.id)
                return res.send(item);
    })
    return res.send({"message":"Incorrect Request"})
})

router.get('/:category',(req,res,next)=>{
    const category = req.params.category;
    
    const catLists=[];
    lists.forEach(item=>{
        if(item.speciality == category)
            catLists.push(item);
    })
    return res.send(catLists);
})

module.exports = router;