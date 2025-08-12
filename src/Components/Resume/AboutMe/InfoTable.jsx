function InfoTable() {
    return(
        <div className="overflow-x-auto">
            <table className="table text-2xl">
                {/* head */}
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th className="text-[#a9927d]">Name</th>
                        <td>Khandaker Ziaur Rahman</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th className="text-[#a9927d]">Phone</th>
                        <td>+8801793158877</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className="text-[#a9927d]">Nationality</th>
                        <td>Bangladeshi</td>
                    </tr>
                    <tr>
                        <th className="text-[#a9927d]">Email</th>
                        <td>zrrehan@outlook.com</td>
                    </tr>
                    <tr>
                        <th className="text-[#a9927d]">Location</th>
                        <td>Dhaka, Bangladesh</td>
                    </tr>
                    <tr>
                        <th className="text-[#a9927d]">Languages</th>
                        <td>English, Bengali</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable;