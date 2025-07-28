import { useState } from "react";
import Label from "../../../common/form/Label";
import Input from "../../../common/form/input/InputField";
import Button from "../../../common/ui/button/Button";
import { useAuth } from "../../../context/AuthContext";



export default function SignInForm() {
   const { login } = useAuth();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
  
   
  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
      
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm  sm:text-title-md">
            Iniciar Sesion
            </h1>
            
          </div>
          <div>
    
          <form >             
             <div className="space-y-6">
                <div>
                  <Label>
                    Usuario <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input placeholder="admin"  value={credentials.username}  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}/>
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={"password"}
                      placeholder="Password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />
                   
                  </div>
                </div>
               
                <div>
                  <Button className="w-full" size="sm" onClick={() => {
                      login(credentials);
                  }} >
                    Ingresar 
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700  sm:text-start">
                Crear usuario{","}
                <span
               
                  className="text-brand-500 hover:text-brand-600 "
                >
                  registrar
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
