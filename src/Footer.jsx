function Footer() {
    return (
      <footer style={{display: "block", margin: "0 auto", textAlign: "center",  width: "30%", align:"center", padding: "0px", backgroundColor: "#abcded", marginTop: "25px" }}>
        
        <p style={{ fontSize: "12px" }}>© {new Date().getFullYear()} TinData</p>
      </footer>
    );
  }
  
  export default Footer;
  