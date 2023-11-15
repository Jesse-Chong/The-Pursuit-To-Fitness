function Home() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textCenterStyle = {
    textAlign: 'center',
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      <div style={textCenterStyle}>
      <h2>💪 Get ready to be on the pursuit to fitness. 🏋️‍♀️</h2>
    </div>
    </div>
  );
}
export default Home;
