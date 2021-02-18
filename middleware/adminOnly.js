export default function ({app, redirect, route}){
    if(app.$auth.user.role !== "admin" ){
      console.log("admin only here sorry");
        return redirect({
        name: 'index',
  
      }
      )
    }

    }