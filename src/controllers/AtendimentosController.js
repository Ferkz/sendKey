const Atendimento = require('../models/Atendimento');
require('../models/Atendimento');
const Setor = require('../models/Setor');
const dataHelper = require('../helpers/dataHelper');
const { Authenticated, Permission, Authorization } = require('./controllers');
const Usuario = require ('../models/Usuario');
require('../models/Usuario')


module.exports = class AtendimentosController  {
    static gerandoAtendimento = async (req,res)=>{
        try {
            const novoAtendimento = await Atendimento.create(req.body);
            return res.send({novoAtendimento});
        }catch(erro){
            return res.status(400).send ({error: 'Falha a gerar atendimento '+erro});
        }
    } 
    static pegarAtendimento= async (req,res)=>{
        try {
            const getAtendimentos = await Atendimento.find()    
            const user = req.user.nome
            console.log('atendimentos',user);
            
            return res.render('./atendimentos/atendimentos',{
                atendimentos:getAtendimentos,
                usuario:user,
              
            });
            
        }catch (error) {
            console.log(error);
            return res.redirect('/login')
        }
    }
    static updateAtendimento = async (req,res)=>{
        try{
            const pegarAtendimento = await Atendimento.findOne({_id: req.params.id})  
            const setores = await Setor.find()
            const dataAtual = dataHelper
            const user = req.user.nome
            return res.render('./atendimentos/atendimento-em-progresso',{
                atendimento: pegarAtendimento,
                data:dataAtual,
                usuario:user,
                setores: setores

            })
        }catch(error){
          return res.status(400).send ({error: 'Falha ao pegar atendimento' + error})
          
        }
    }
    static exibirSenha =(req,res,) =>{
        try {
            res.render('./exibir-senha/exibir-senha');     
        }catch(error) {
            return res.status(400).send ({error: 'Falha' + error})  
        }
    }
    static logout =  (req, res) => {
        req.logout((erro)=>{
            if(erro) {
                return next (erro)
            }
            res.redirect('/login');
        });  
    }
    static criarSetor = async (req,res)=>{
        try {
            const nome = req.body.setor
        
                const novoSetor = await ({nome})
                new Setor(novoSetor).save(()=>{
                res.redirect('/dashboard/configuracoes')
                req.flash('success_msg','Setor Adicionado com sucesso!')
            })
            
            
        } catch (error) {
            console.log(error);
        }
    }
    static deletarSetor = async (req,res) =>{
        try {
            const setor = await Setor.findByIdAndDelete({_id: req.params.id})
           if(!setor){
            return res.status(404).send('Setor não encontrado')
           }
           req.flash('success_msg','Setor Excluido com sucesso!')
           res.send(('Setor deletado com sucesso!'))
           
        } catch (error) {
            req.flash('error_msg','Houve um erro interno')
            res.status(500).send('erro interno do servidor ',error)
            
        }
    }
    static deletaAtendimento = async (req,res)=>{
        try {
            const atendimentoAtual = await Atendimento.findByIdAndDelete({_id: req.params.id})
            if(!atendimentoAtual){
                return res.status(404).send('atendimento não encontrado')
            }
            res.send('atendimento enviado ao consultorio')
        } catch (error) {
            res.status(500).send('erro interno do servidor ',error)
        }
    }
    static configuracoes = async (req,res)=>{
        try {
            const setoresExistentes = await Setor.find()
            res.render('./configuracoes/configuracoes',{setores:setoresExistentes})
        } catch (error) {
            console.log(error);
            
        }
    }
    static consultorio = (req,res) =>{
        res.render('./atendimentos/consultorio')
    }
    static index = async (req,res, next)=>{
        try {
            const isAuthenticated = new Authenticated(req,res,next)
            isAuthenticated.isAuth()
            res.render('./index')
        } catch (error) {
            console.log('erro ao logar ',error);
        }
    }
    static hasPermissionUser = (permission) =>{
          return async (req,res,next) =>{
          const usuario = await Usuario.findOne(req.user._id)
          const authorization = new Authorization()
          if(usuario.authorization.hasPermission(permission)){
               return next()
          }
          res.redirect('/acesso-negado')
          }
    }
    static admin = (req,res,next) =>{
       try {
        const isAuthenticated = new Authenticated (req,res,next)
        isAuthenticated.isAuth()
        const adminPermission = new Permission('adm')
        this.hasPermissionUser(adminPermission)
        res.send('olá admin')
        
       } catch (error) {
        console.log(error);
       }
    }
    static forbiden = (req,res) =>{
        res.send('<h1>Você não tem permissão para acessar está página.</h1>')
    }
}
