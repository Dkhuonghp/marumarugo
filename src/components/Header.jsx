import React, { useRef, useEffect, useState, Component } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import productData from '../assets/fake-data/products'
import Logo from "../assets/images/products/logo.svg"
import classNames from 'classnames';

// import Cart from '../pages/Cart'
// import CartItem from './CartItem'

const mainNav = [
    {
        display: "ホーム",
        path: "/"
    },
    {
        display: "カテゴリ",
        path: "/catalog"
    },
    {
        display: "メンズ",
        path: "/men"
    },
    {
        display: "キッズ",
        path: "/kids"
    },
    {
        display: "スポーツ",
        path: "/sport"
    },
    {
        display: "セール",
        path: "/sale"
    }
]

// const Header = () => {
//     const cartItems = useSelector((state) => state.cartItems.value)

//     const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

//     const [totalProducts, setTotalProducts] = useState(0)    

//     const [totalHeart, setTotalHeart] = useState(0)

//     useEffect(() => {
//         setCartProducts(productData.getCartItemsInfo(cartItems))
//         // setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
//         setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
        
//     }, [cartItems])

//     // useEffect(() => {
//     //     setTotalHeart(totalHeart + 1)
//     // }, [])

//     const { pathname } = useLocation()
//     const activeNav = mainNav.findIndex(e => e.path === pathname)

//     const headerRef = useRef(null)

//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//                 headerRef.current.classList.add('shrink')
//             } else {
//                 headerRef.current.classList.remove('shrink')
//             }
//         })
//         return () => {
//             window.removeEventListener("scroll")
//         };
//     }, []);

//     const menuLeft = useRef(null)

//     const menuToggle = () => menuLeft.current.classList.toggle('active')

//     return (
//         <div className="header" ref={headerRef}>
//             <div className="container">
//                 <div className="header__logo">
//                     <Link to="/">
//                         <img src={Logo} alt="Logo" />
//                     </Link>
//                 </div>
//                 <div className="header__menu">
//                     <div className="header__menu__mobile-toggle" onClick={menuToggle}>
//                         <i className='bx bx-menu-alt-left'></i>
//                     </div>

//                     {/* //! Header menu Left */}
                    // <div className="header__menu__left" ref={menuLeft}>
                    //     <div className="header__menu__left__close" onClick={menuToggle}>
                    //         <i className='bx bx-chevron-left'></i>
                    //     </div>
                    //     {
                    //         mainNav.map((item, index) => (
                    //             <div
                    //                 key={index}
                    //                 className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                    //                 onClick={menuToggle}
                    //             >
                    //                 <Link to={item.path}>
                    //                     <span>{item.display}</span>
                    //                 </Link>
                    //             </div>
                    //         ))
                    //     }
                    // </div>
                        
//                     {/*//! Header menu Right */}
//                     <div className="header__menu__right">
//                         <div className="header__menu__item header__menu__right__item">
//                             <i className="bx bx-search"></i>
//                         </div>
//                         {/* <div className="header__menu__item header__menu__right__item">
//                             <Link to="/heart">
//                                 <i className="bx bx-heart"></i>
//                                 <span className="cart__item-qty">{totalHeart}</span>
//                             </Link>
//                         </div> */}
//                         <div className="header__menu__item header__menu__right__item">
//                             <Link to="/cart">
//                                 <i className="bx bx-shopping-bag"></i>
//                                 <span className="cart__item-qty">{totalProducts}</span>
//                             </Link>
//                         </div>
//                         {/* <div className="header__menu__item header__menu__right__item">
//                             <Link to="/user">    
//                                 <i className="bx bx-user"></i>
//                             </Link>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false,
            isWhite: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }
    
    handleNavigation = (e) => {
        const window = e.currentTarget;
    
        const isTop = window.scrollY < 10;
        if (window.scrollY  === 0) {
            this.setState({
                isWhite: false
            })
        }

        if (isTop !== true) {
            this.setState({
                scrolled: true,
                isWhite: true
            })
        } else {
            this.setState({
                scrolled: false
            })
        }

        if (this.prev > window.scrollY) {
            this.setState({
                scrolled: false
            })
        }
        this.prev = window.scrollY;

    };

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return(
            <div className={classNames('Header', {
                scrolled: this.state.scrolled === true,
                white: this.state.isWhite === true
                })}>
                <ul className="menu">
                    {
                        mainNav.map((item, index) => (
                            <div key={index}>
                                <li>
                                    <Link to={item.path}>
                                        <a>{item.display}</a>
                                    </Link>
                                </li>
                            </div>
                        ))
                    }
                </ul>
                {/* //! Logo */}
                <div className="logo flex-center">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                
                <div className="cartHeader flex-center"> 
                    <div className="header__menu__item header__menu__right__item">
                        <Link to="/heart">
                            <i className="bx bx-heart"></i>
                            <span className="cart__item-qty"></span>
                        </Link>
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <Link to="/cart">
                            <i className="bx bx-shopping-bag"></i>
                            <span className="cart__item-qty"></span>
                        </Link>
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <Link to="/user">    
                            <i className="bx bx-user"></i>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
