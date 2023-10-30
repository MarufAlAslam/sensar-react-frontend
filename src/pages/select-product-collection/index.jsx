import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
// import collection1 from "../../assets/img/collection2.png"

const SelectProductCollection = () => {
    const [collections, setCollections] = React.useState([])
    const [categories, setCategories] = React.useState([])
    const [categoryName, setCategoryName] = React.useState(null)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [displayMeasurement, setDisplayMeasurement] = React.useState(false)
    const [materials, setMaterials] = React.useState([])
    const [projectId, setProjectId] = React.useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const pId = localStorage.getItem("projectId")
        setProjectId(pId)
    }, [])

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
                setCategoryName(res.nameCategory)
                setCategories(res.subCategory);
            })

    }

    useEffect(() => {
        fetch("https://sensar.vercel.app/api/v1/materials", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setMaterials(res);
            })
    }, [])

    const getDetails = (e) => {
        setSelectedCategory(e.target.value)
        setDisplayMeasurement(true)
    }

    const updateProductCollection = (e) => {
        e.preventDefault()

        const form = e.target
        const productType = categoryName
        const collection = form.collection.value
        const dimension = form.dimension.value
        const quantity = form.quantity.value
        const material = form.material.value

        const data = {
            productType,
            collection,
            dimension,
            quantity,
            material
        }


        fetch(`https://sensar.vercel.app/api/v1/project/${projectId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "Product added successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });

                navigate('/projects/add-new/step-2')
            })
    }
    return (
        <div>
            <h2 className='text-blue'>
                Add Product for Project
            </h2>



            <form action="" onSubmit={updateProductCollection}>
                <h2 className='mt-5 font-bold'>
                    Product
                </h2>
                <div className="my-4 text-left">
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

                {
                    categories && (
                        <h2 className='mt-8 font-bold'>
                            Collection
                        </h2>
                    )
                }

                <div className="flex mt-5 justify-start itms-center gap-5 collections">
                    {
                        categories.map((category, index) => (
                            <label htmlFor={`collection${index}`} className='bg-white p-4 cursor-pointer relative'>
                                {/* <img src={collection1} className='mt-5' alt="" /> */}
                                <input type="radio" value={category.subcategory} onChange={getDetails} name="collection" id={`collection${index}`} />
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


                {
                    displayMeasurement && (
                        <div className="flex mt-5 justify-between items-start gap-6">
                            <div className="w-1/5 bg-white p-5">
                                <h2 className='font-bold'>
                                    Measurement
                                </h2>

                                <hr className='my-5' />

                                <p className="text-lg font-semibold">
                                    {selectedCategory}
                                </p>

                                <table className='table max-w-full'>
                                    <thead>
                                        <tr>
                                            <th className='text-left text-sm p-2'>Size</th>
                                            <th className='text-left text-sm p-2'>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-left p-2'>
                                                <input type="text" className='border w-full text-xs p-2' placeholder='dimension' name="dimension" id="" />
                                            </td>
                                            <td className='text-left p-2'>
                                                <input type="number" className='border w-[60px] text-xs p-2' name="quantity" id="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="w-full bg-white p-5">
                                <h2 className='font-bold'>
                                    Material
                                </h2>


                                <div className="flex collections">
                                    {
                                        materials.map((material, index) => (
                                            <label htmlFor={`material${index}`} className='bg-white border mx-2 mt-4 p-4 cursor-pointer relative'>
                                                <img src={material.img} className='mt-5 w-[60px] mx-auto rounded-full' alt="" />
                                                <input type="radio" value={material.name} name="material" id={`material${index}`} />
                                                <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                                                    <div className="check-inner h-[14px] w-[14px]"></div>
                                                </div>

                                                <h2 className='text-xl font-semibold text-center mt-5'>
                                                    {material.name}
                                                </h2>
                                            </label>
                                        )
                                        )}
                                </div>
                            </div>


                        </div>
                    )
                }

                <div className="text-center mt-10">
                    <button className='btn-blue px-10'>
                        <span className='text-xl'>Add</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SelectProductCollection