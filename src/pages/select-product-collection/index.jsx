import React, { useEffect } from 'react'
// import collection1 from "../../assets/img/collection2.png"

const SelectProductCollection = () => {
    const [collections, setCollections] = React.useState([])
    const [categories, setCategories] = React.useState([])

    useEffect(() => {
        fetch("https://sensar.vercel.app/api/v1/product-categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setCollections(res);
            });
    }, []);

    const getSubCategories = (e) => {
        fetch(`https://sensar.vercel.app/api/v1/product-category/${e.target.value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setCategories(res.subCategory);
            })

    }
    return (
        <div>
            <h2 className='text-blue'>
                Add Product for Project
            </h2>



            <form action="">
                <h2 className='mt-5 font-bold'>
                    Product
                </h2>
                <div className="my-4 text-center">
                    <div className="inline-flex justify-center items-center gap-4 p-2 border border-black">
                        {
                            collections.map((collection, index) => {
                                return (
                                    <div className="flex flex-wrap items-center type-radio">
                                        <input type="radio" name="productType" onChange={getSubCategories} value={collection._id} id={`type${index}`} />
                                        <label htmlFor={`type${index}`} className='cursor-pointer'>{collection.nameCategory}</label>

                                        {/* display a | if the collection is not the last one */}
                                        {index !== collections.length - 1 && <span className='ml-4'>|</span>}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>

                <h2 className='mt-8 font-bold'>
                    Collection
                </h2>

                <div className="flex mt-5 justify-start itms-center gap-5 collections">
                    {
                        categories.map((category, index) => (
                            <label htmlFor="collection1" className='bg-white p-4 cursor-pointer relative'>
                                {/* <img src={collection1} className='mt-5' alt="" /> */}
                                <input type="radio" value={"bilnany"} defaultChecked name="collection" id="collection1" />
                                <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                                    <div className="check-inner h-[14px] w-[14px]"></div>
                                </div>

                                <h2 className='text-xl font-semibold text-center mt-5'>
                                    {category.subcategory}
                                </h2>
                            </label>
                        )
                        )}
                </div>
            </form>
        </div>
    )
}

export default SelectProductCollection