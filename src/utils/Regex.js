export const validEmail = new RegExp(
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");
export const validYear = new RegExp("^(?=.*?[1-6])$");
export const validName = new RegExp(
  "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
);
export const validOrgName = new RegExp(
  "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
);
export const validLocation = new RegExp("^[a-zA-Z]+(?:[s-][a-zA-Z]+)*$");
export const validDescription = new RegExp("^[a-zA-Z0-9,.!?\\s]+$");
export const validDegree = new RegExp("^[A-Za-zs.&-]*$");
export const validSkills = new RegExp("^[a-zA-Z ,]+$");
