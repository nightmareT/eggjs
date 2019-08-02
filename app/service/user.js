const Service = require('egg').Service;

class userService extends Service {
  async dataBase() {
    try {
        const result = await this.app.mysql.get('runoob_tbl', { runoob_id: 1 });
        if (!result) {
            const result = await this.app.mysql.insert('runoob_tbl', { user_name: 'jiujiu'})
        }
        console.log(result)
      } catch (error) {
        console.dir(error)
      }
  }
}

module.exports = userService;