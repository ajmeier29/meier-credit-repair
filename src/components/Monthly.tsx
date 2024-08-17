import DisplayButtons from "./DisplayButtons";
import MonthlyPricingBox from "./MonthlyPricingBox";


export default function Monthly() {
    const standardPayLink: string = (process.env.NEXT_PUBLIC_STANDARD_PAY_LINK as string);

    return (
        <>

            <div className="-mx-4 flex flex-wrap justify-center">
                <MonthlyPricingBox
                    title="Standard"
                    description="Perfect for disputing 1 collection, hard inquiries, and more."
                    enrollmentFee="99"
                    monthlyRate="79"
                    amountOfDisputes="1"
                    isBankruptcy={false}
                    isCarRepo={false}
                    url="#"
                    buttonColor="bg-primary"
                    hoverColor="hover:bg-slate-200"
                />
                <MonthlyPricingBox
                    title="Premium"
                    description="Perfect for clients who have bankruptcies and/or alot of items to dispute."
                    enrollmentFee="199"
                    monthlyRate="99"
                    amountOfDisputes="5"
                    isBankruptcy={true}
                    isCarRepo={true}
                    url="#"
                    buttonColor="primary-green"
                    hoverColor="hover:bg-[#63d576]"
                />
                <MonthlyPricingBox
                    title="Premium +"
                    description="Ideal for clients with many negative items and who want constant removal."
                    enrollmentFee="299"
                    monthlyRate="119"
                    amountOfDisputes="Unlimited"
                    isBankruptcy={true}
                    isCarRepo={true}
                    url="#"
                    buttonColor="bg-primary"
                    hoverColor="hover:bg-slate-200"
                />
            </div>
        </>
    )
}