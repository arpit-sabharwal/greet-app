
const titlecase=(str)=>{return  str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();}
export const fullname=(firstname,lastname)=>{return titlecase(firstname)+" "+titlecase(lastname);}