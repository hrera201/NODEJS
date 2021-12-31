const db=require('../models')
const {ValidationError}=require('sequelize/dist');
const EmployeeModel=require('../models').Employee
const RoleModel=require('../models').Department
const DepartmentModel= ('../models').Project
const bcrypt=require('bcrypt');





module.exports.read = function(req, res, next){
    db.Department.findAll().then( (result) => {
        res.status(200).json({data:result})
    }).catch(error=>{
        res.status(500).json({
            message:'Something WentWrong'
        })
    })
}


module.exports.showOne=function(req,res,next){
    const id=req.params.id
    db.Department.findOne({
        where:{id:id}
    }).then(result=>{
        res.status(200).json(result)
    }).catch(error=>{
        res.status(500).json({
            message:'Something Went Wrong'
        })
    })
}

module.exports.delete=function(req,res,next){
    const id=req.params.id
    db.Department.destroy({
        where:{id:id}
    }).then(result=>{
        res.status(200).json({
            message:'Deleted Succesfully'
        })
    }).catch(error=>{
        res.status(200).json({
            message:'Something Went Wrong'
        })
    })

}


module.exports.create=function(req,res,next){
   
    db.Department.save({
    }).then(result=>{
        res.status(200).json({
            message:'Employee Created Successfully',
            employe:result
        })
    }).catch(error=>{
        res.status(200).json({
            message:'Something Went Wrong'
        })
    })



}
