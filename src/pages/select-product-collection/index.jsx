import React from 'react'
import collection1 from "../../assets/img/collection2.png"

const SelectProductCollection = () => {
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
                        <div className="flex items-center type-radio">
                            <input type="radio" name="productType" defaultChecked value={"Desk/Workstation"} id="type1" />
                            <label htmlFor="type1" className='cursor-pointer'>Desk/Workstation</label>
                        </div>
                        <span>|</span>
                        <div className="flex items-center type-radio">
                            <input type="radio" name="productType" value={"Sofa"} id="type2" />
                            <label htmlFor="type2" className='cursor-pointer'>Sofa</label>
                        </div>
                        <span>|</span>
                        <div className="flex items-center type-radio">
                            <input type="radio" name="productType" value={"Chair"} id="type3" />
                            <label htmlFor="type3" className='cursor-pointer'>Chair</label>
                        </div>
                        <span>|</span>
                        <div className="flex items-center type-radio">
                            <input type="radio" name="productType" value={"Silence Booth"} id="type4" />
                            <label htmlFor="type4" className='cursor-pointer'>Silence Booth</label>
                        </div>
                        <span>|</span>
                        <div className="flex items-center type-radio">
                            <input type="radio" name="productType" value={"{Partition}"} id="type5" />
                            <label htmlFor="type5" className='cursor-pointer'>Partition</label>
                        </div>
                    </div>
                </div>

                <h2 className='mt-8 font-bold'>
                    Collection
                </h2>

                <div className="flex mt-5 justify-between itms-center gap-5 collections">
                    <label htmlFor="collection1" className='bg-white p-4 cursor-pointer relative'>
                        <img src={collection1} className='mt-5' alt="" />
                        <input type="radio" value={"bilnany"} defaultChecked name="collection" id="collection1" />
                        <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                            <div className="check-inner h-[14px] w-[14px]"></div>
                        </div>

                        <h2 className='text-xl font-semibold text-center my-5'>BILNANY</h2>
                    </label>
                    <label htmlFor="collection2" className='bg-white p-4 cursor-pointer relative'>
                        <img src={collection1} className='mt-5' alt="" />
                        <input type="radio" defaultChecked value={"eligoly"} name="collection" id="collection2" />
                        <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                            <div className="check-inner h-[14px] w-[14px]"></div>
                        </div>

                        <h2 className='text-xl font-semibold text-center my-5'>ELIGOLY</h2>
                    </label>
                    <label htmlFor="collection3" className='bg-white p-4 cursor-pointer relative'>
                        <img src={collection1} className='mt-5' alt="" />
                        <input type="radio" value={"muchini"} defaultChecked name="collection" id="collection3" />
                        <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                            <div className="check-inner h-[14px] w-[14px]"></div>
                        </div>

                        <h2 className='text-xl font-semibold text-center my-5'>MUCINI</h2>
                    </label>
                    <label htmlFor="collection4" className='bg-white p-4 cursor-pointer relative'>
                        <img src={collection1} className='mt-5' alt="" />
                        <input type="radio" value={"inovaty"} defaultChecked name="collection" id="collection4" />
                        <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                            <div className="check-inner h-[14px] w-[14px]"></div>
                        </div>

                        <h2 className='text-xl font-semibold text-center my-5'>INOVATY</h2>
                    </label>
                    <label htmlFor="collection5" className='bg-white p-4 cursor-pointer relative'>
                        <img src={collection1} className='mt-5' alt="" />
                        <input type="radio" value={"elmy"} defaultChecked name="collection" id="collection5" />
                        <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                            <div className="check-inner h-[14px] w-[14px]"></div>
                        </div>

                        <h2 className='text-xl font-semibold text-center my-5'>ELMY</h2>
                    </label>
                    <label htmlFor="collection6" className='bg-white p-4 cursor-pointer relative'>
                        <img src={collection1} className='mt-5' alt="" />
                        <input type="radio" value={"izildy"} defaultChecked name="collection" id="collection6" />
                        <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                            <div className="check-inner h-[14px] w-[14px]"></div>
                        </div>

                        <h2 className='text-xl font-semibold text-center my-5'>IZILDY</h2>
                    </label>
                    <label htmlFor="collection7" className='bg-white p-4 cursor-pointer relative'>
                        <img src={collection1} className='mt-5' alt="" />
                        <input type="radio" value={"marboly"} defaultChecked name="collection" id="collection7" />
                        <div className="custom-checkbox border border-black p-[2px] h-[20px] w-[20px] absolute top-[10px] right-[10px]">
                            <div className="check-inner h-[14px] w-[14px]"></div>
                        </div>

                        <h2 className='text-xl font-semibold text-center my-5'>MARBOLY</h2>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default SelectProductCollection