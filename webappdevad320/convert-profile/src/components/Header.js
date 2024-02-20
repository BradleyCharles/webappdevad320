const Header = ({banner}) => {
  console.log("Banner prop value:", banner);

  return (
    <div className="banner">
     
        <img src="/images/login.png" alt="Login" />
 
      <h2>{banner}</h2>
    </div>
  );
};

export default Header;
