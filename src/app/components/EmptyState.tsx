
'use client'; 

interface EmptyStateProps {
    title: string; 
    subtitle?: string; 
}



const EmptyState: React.FC<EmptyStateProps> = ({
    title, 
    subtitle,
}) => {
    return(
        <div className="flex items-center flex-col justify-center text-zinc-100">
            <div>
                {title}
            </div>
            <div>
                {subtitle}
            </div>

        </div>
    )
}

export default EmptyState