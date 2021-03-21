import CartWidget from './CartWidget';
function NavBar(){
    return(
           
        <div class="container d-flex align-items-center">
        <section  class="d-flex align-items-center">
        <header id="header" class="fixed-top">
     <nav class="nav-menu d-none d-lg-block">
       <ul>
         <li class="active"><a href="index.html">Home</a></li>
         <li><a href="#about-us">Sobre nosotros</a></li>
         <li><a href="#why-us">Por que nosotros</a></li>
         <li><a href="#catalog">Catálogo</a></li>
         <li><a href="#specialRequests">Pedidos especiales</a></li>
         <li><a href="#gallery">Galeria</a></li>
         <li><a href="#buy-a-tshirt">Tienda Online</a></li>
         <li><a href="#daShopped">Carrito de compras</a></li>
         <li><a href="#staff">Nosotros</a></li>
         <li><a href="#contact">Contacto</a></li>
         <li class="buy-a-tshirt text-center"><a href="#buy-a-tshirt">Pedinos tu remera</a></li>
       </ul>
     </nav>
     </header>

     {/* <!-- ======= Hero Section ======= --> */}

<div class="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
<div class="row">
 <div class="col-lg-8">
   <h1>Bienvenidos a <span>Hell remeras</span></h1>
   <h2>Trayendo las remeras del infierno hace mas de 3 años</h2>
 </div>
</div>
</div>
<CartWidget/>
</section>
   </div>
    );
}

export default NavBar;