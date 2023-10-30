import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ViewProject = () => {
    const [project, setProject] = React.useState(null)
    const [companyName, setCompanyName] = React.useState(null)
    const id = useLocation().pathname.split("/")[3]

    useEffect(() => {
        fetch(`https://sensar.vercel.app/api/v1/project/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setProject(res);
            });
    }, [id]);

    useEffect(() => {
        project && fetch(`https://sensar.vercel.app/api/v1/customer/${project?.data?.companyName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setCompanyName(res.companyName);
            });
    }, [project, project?.data?.companyName]);
    console.log(id)
    return (
        <div>
            <h2>
                <span className='text-3xl text-blue font-bold'>Project</span>{" "}/{" "}<span className=' text-black text-sm font-bold'>{companyName}</span>
            </h2>
            <table className="table w-full mt-10 text-sm">
                <thead>
                    <tr>
                        <th className="p-3 border-b">
                            Item
                        </th>
                        <th className="p-3 border-b">
                            Model
                        </th>
                        <th className="p-3 border-b">
                            Dimension
                        </th>
                        <th className="p-3 border-b">
                            Material
                        </th>
                        <th className="p-3 border-b">
                            Quantity
                        </th>
                        <th className="w-[400px] text-left p-3 border-b">
                            Decription
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        project && (
                            <tr>
                                <td className="text-center border-t p-3">
                                    {project?.data?.projectName}
                                </td>
                                <td className="text-center border-t p-3">
                                    {project?.projectDetails && project?.projectDetails?.productType + "-" + project?.projectDetails?.collection}
                                </td>
                                <td className="text-center border-t p-3">
                                    {project?.projectDetails && project?.projectDetails?.dimension}
                                </td>
                                <td className="text-center border-t p-3">
                                    {project?.projectDetails && project?.projectDetails?.material}
                                </td>
                                <td className="text-center border-t p-3">
                                    {project?.projectDetails && project?.projectDetails?.quantity}
                                </td>
                                <td className="text-left border-t p-3">
                                    {project?.data?.projectDescription ? project?.data?.projectDescription : "No description"}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewProject