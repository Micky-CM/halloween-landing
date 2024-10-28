const Footer =() => {
  return (
    <footer className="w-full flex justify-between items-center bg-gray-900 text-frosted px-10 py-4">
      <div className="font-body text-lg">
          &copy; {new Date().getFullYear()} Trick or Treat Fest
      </div>

        <img
          className="w-32"
          src="../../../public/Trick-or-Treat-Fest-logo.png"
          alt=""
        />

        <div className="flex text-3xl gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pumpkin">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pumpkin">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-pumpkin">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-pumpkin">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pumpkin">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

    </footer>
  )
}

export default Footer
