const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <p key={index}>{part.name}</p>
      ))}
    </div>
  );
};

const Total = (props) => {
  const totalExercises = props.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <p>Number of exercises: {totalExercises}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
