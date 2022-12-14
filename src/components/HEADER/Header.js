import React from "react";


class Header extends  React.Component{
    render() {
      return(
          <div>
              <header className="header-nav menu_style_home_four home8 navbar-scrolltofixed stricky main-menu">
                  <div className="container-fluid">

                      <nav>
                          <!-- Menu Toggle btn-->
                          <div className="menu-toggle">
                              <img className="nav_logo_img img-fluid" src="images/header-logo.png"
                                   alt="header-logo.png">
                                  <button type="button" id="menu-btn">
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                  </button>
                          </div>
                          <a href="#" className="navbar_brand float-left dn-smd">
                              <img className="logo1 img-fluid" src="images/header-logo.png" alt="header-logo.png">
                                  <img className="logo2 img-fluid" src="images/footer-logo-h8.png"
                                       alt="footer-logo-h8.png">
                                      <span>EDUMY KINDERGARTEN</span>
                          </a>
                          <!-- Responsive Menu Structure-->
                          <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) -->
                          <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
                              <li className="last">
                                  <a href="page-contact.html"><span className="title">Contact</span></a>
                              </li>
                              <li className="list_five">
                                  <a href="#"><span className="title">Pages</span></a>
                                  <ul>
                                      <li>
                                          <a href="#"><span className="title">Shop Pages</span></a>
                                          <ul>
                                              <li><a href="page-shop.html">Shop</a></li>
                                              <li><a href="page-shop-single.html">Shop Single</a></li>
                                              <li><a href="page-shop-cart.html">Cart</a></li>
                                              <li><a href="page-shop-checkout.html">Checkout</a></li>
                                              <li><a href="page-shop-order.html">Order</a></li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="#"><span className="title">User Admin</span></a>
                                          <ul>
                                              <li><a href="page-dashboard.html">Dashboard</a></li>
                                              <li><a href="page-my-courses.html">My Courses</a></li>
                                              <li><a href="page-my-order.html">My Order</a></li>
                                              <li><a href="page-my-message.html">My Message</a></li>
                                              <li><a href="page-my-review.html">My Review</a></li>
                                              <li><a href="page-my-bookmarks.html">My Bookmarks</a></li>
                                              <li><a href="page-my-listing.html">My Listing</a></li>
                                              <li><a href="page-my-setting.html">My Setting</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="page-about.html">About Us</a></li>
                                      <li><a href="page-gallery.html">Gallery</a></li>
                                      <li><a href="page-faq.html">Faq</a></li>
                                      <li><a href="page-login.html">LogIn</a></li>
                                      <li><a href="page-register.html">Register</a></li>
                                      <li><a href="page-pricing.html">Membership</a></li>
                                      <li><a href="page-error.html">404 Page</a></li>
                                      <li><a href="page-terms.html">Terms and Conditions</a></li>
                                      <li><a href="page-become-instructor.html">Become an Instructor</a></li>
                                      <li><a href="page-ui-element.html">UI Elements</a></li>
                                  </ul>
                              </li>
                              <li className="list_four">
                                  <a href="#"><span className="title">Blog</span></a>
                                  <ul>
                                      <li><a href="page-blog-v1.html">Blog List 1</a></li>
                                      <li><a href="page-blog-grid.html">Blog List 2</a></li>
                                      <li><a href="page-blog-list.html">Blog List 3</a></li>
                                      <li><a href="page-blog-single.html">Single Post</a></li>
                                  </ul>
                              </li>
                              <li className="list_three">

                                  <a href="#"><span className="title">Events</span></a>
                                  <ul>
                                      <li><a href="page-event.html">Event List</a></li>
                                      <li><a href="page-event-single.html">Event Single</a></li>
                                  </ul>

                              </li>
                              <li className="list_two">
                                  <a href="#"><span className="title">Courses</span></a>
                                  <!-- Level Two-->
                                  <ul>
                                      <li>
                                          <a href="#">Courses List</a>
                                          <!-- Level Three-->
                                          <ul>
                                              <li><a href="page-course-v1.html">Courses v1</a></li>
                                              <li><a href="page-course-v2.html">Courses v2</a></li>
                                              <li><a href="page-course-v3.html">Courses v3</a></li>
                                          </ul>
                                      </li>
                                      <li>
                                          <a href="#">Courses Single</a>
                                          <!-- Level Three-->
                                          <ul>
                                              <li><a href="page-course-single-v1.html">Single V1</a></li>
                                              <li><a href="page-course-single-v2.html">Single V2</a></li>
                                              <li><a href="page-course-single-v3.html">Single V3</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="page-instructors.html">Instructors</a></li>
                                      <li><a href="page-instructors-single.html">Instructor Single</a></li>
                                  </ul>
                              </li>
                              <li className="list_one">
                                  <a href="#"><span className="title">Home</span></a>
                                  <!-- Level Two-->
                                  <ul>
                                      <li><a href="index-2.html">Home 1</a></li>
                                      <li><a href="index2.html">Home 2</a></li>
                                      <li><a href="index3.html">Home 3</a></li>
                                      <li><a href="index4.html">Home 4</a></li>
                                      <li><a href="index5.html">Home 5</a></li>
                                      <li><a href="index6.html">Home - University</a></li>
                                      <li><a href="index7.html">Home College</a></li>
                                      <li><a href="index8.html">Home Kindergarten</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </nav>
                      <!-- End of Responsive Menu -->
                  </div>
              </header>
          </div>
      )

    }

}
export default Header;