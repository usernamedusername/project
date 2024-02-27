import React from 'react'
import styled from 'styled-components';

function ProductList() {
    return (
        <Container>
            <section className="products section container" id="products">
                <h2 className="section__title">
                    Products
                </h2>

                <div className="products__container grid">
                    <article className="products__card">
                        <img src="assets/images/pictures/watch/product1.png" alt="" className="products__img" />

                        <h3 className="products__title">Spirit rose</h3>
                        <span className="products__price">$1500</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/images/pictures/watch/product2.png" alt="" className="products__img" />

                        <h3 className="products__title">Khaki pilot</h3>
                        <span className="products__price">$1350</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/images/pictures/watch/product3.png" alt="" className="products__img" />

                        <h3 className="products__title">Jubilee black</h3>
                        <span className="products__price">$870</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/images/pictures/watch/product4.png" alt="" className="products__img" />

                        <h3 className="products__title">Fosil me3</h3>
                        <span className="products__price">$650</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    <article className="products__card">
                        <img src="assets/images/pictures/watch/product5.png" alt="" className="products__img" />

                        <h3 className="products__title">Duchen</h3>
                        <span className="products__price">$950</span>

                        <button className="products__button">
                            <i className='bx bx-shopping-bag'></i>
                        </button>
                    </article>
                </div>
            </section>
        </Container>
    )
}

export default ProductList


const Container = styled.div`
  .products__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media screen and (min-width: 992px) {
      padding-top: 2rem;
    }
    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(3, 200px);
      justify-content: center;
      gap: 2.5rem;
    }
    @media screen and (max-width: 320px) {
      grid-template-columns: repeat(1, 180px);
      justify-content: center;
    }
  }

  .products__card {
    position: relative;
    background-color: var(--container-color);
    padding: 1.25rem 0;
    border: 1px solid var(--border-color);
    text-align: center;
    transition: .3s;

    @media screen and (min-width: 767px) {
      padding: 2rem 0;
    }
  }

  .products__img {
    height: 125px;
    margin-bottom: var(--mb-1);

    @media screen and (min-width: 767px) {
      height: 155px;
    }
  }

  .products__title, 
  .products__price {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .products__title {
    text-transform: uppercase;
    margin-bottom: var(--mb-0-5);
  }

  .products__price {
    color: var(--first-color);
  }

  .products__button {
    background-color: var(--button-color);
    padding: .4rem;
    color: #fff;
    font-size: 1rem;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: .3s;
  }

  .products__button:hover {
    background-color: var(--button-color-alt);
  }

  .products__card:hover {
    box-shadow: 0 8px 32px hsla(0, 0%, 10%, .1);
  }
`;