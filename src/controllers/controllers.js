class Authenticated {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
      }
      isAuth() {
        if (this.req.isAuthenticated()) {
          return this.next();
        }
        this.res.redirect('/login');
      }
}

class Permission{
  constructor(name){
    this.name = name
  }
}
class Authorization{
  constructor(){
    this.permission = []
  }
  addPermission(){
    this.permissions.push(this.permission)
  }
  hasPermission(){
    return this.permissions.includes(this.permission('admin'))
  }
}

module.exports = {
  Authenticated,
  Permission,
  Authorization
}
