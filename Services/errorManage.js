export const errorCheck = (value, type) => {
    switch (type) {
      case "text":
        if (!/[a-z]/gi.test(value)) {
          return "*Formato no valido";
        } else {
          return "";
        }
  
      case "email":
        if (
          !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        ) {
          return "Email incorrect format";
        } else {
          return "";
        }
        
      case "password":

      case "password2":
        if (value.length < 8) {
          return "Write 8 characters at least";
        } else {
          //Checking the password format....
  
          if (!/[\d()+-]/g.test(value)) {
            return "*Escribe al menos un número, una letra minúscula y una letra mayúscula.";
          } else {
            return "";
          }
        }

      default:
        console.log("Algunos errores no se han tenido en cuenta");
  
        break;
    }
  };
  