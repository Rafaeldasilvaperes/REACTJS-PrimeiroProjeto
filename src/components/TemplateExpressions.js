import { MyComponent } from "./MyComponent.js";

export const TemplateExpressions = () => {
  
  const name = "Rafael";
  const data = {
    age: 30,
    job: "Santa Claus",
  };
  
  return (
    <div>
      <h1>Olá, eu sou o {name}</h1>
      <h1>Eu tenho {data.age} e sou o {data.job}!</h1>
      <MyComponent />
    </div>
  )
}