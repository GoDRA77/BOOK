import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Книжный мир</h5>
                <p>Лучший книжный в городе.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="/login">Войти</a></li>
                    <li><a href="#!">Регистрация</a></li>
                    <li><a href="#!"> Купить книгу</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 MAKE BY :
        <a href=""> AKBARINCORPORAITED</a>
    </div>

</footer>

export default Footer