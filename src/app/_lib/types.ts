export type SectionHeadingProps = {
    children: React.ReactNode
}

export interface Project {
    title: string;
    hostedUrl?: string;
    description: string;
    imageUrl: string[];
    tags: string[];
}
  
export interface ProjectProps {
project: Project;
index: number;
zoomImages:boolean;
setZoomImages: React.Dispatch<React.SetStateAction<boolean>>;
setSelectedProjectUrl: React.Dispatch<React.SetStateAction<any[]>>;
}

export type OverlayImagePropType = {
    urls: string[];
    setZoomImages: React.Dispatch<React.SetStateAction<boolean>>
}

export type CarouselProps ={
    images: string[]
}