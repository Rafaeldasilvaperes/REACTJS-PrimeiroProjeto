import { MyComponent } from "./MyComponent.js";

export const TemplateExpressions = () => {
  
  const name = "TemplateExpressions";
  const data = {
    age: 30,
    description: "Maneiro",
  };
  
  return (
    <div>
      <h1>Olá, eu sou o {name} o {data.age} e sou o {data.description}!</h1>
      <MyComponent />
    </div>
  )
}