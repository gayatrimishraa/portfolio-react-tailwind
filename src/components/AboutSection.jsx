import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">

        <div className="container mx-auto mx-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                <span className="text-primary">About</span>
                <span className="text-gradient"> Me</span>
              </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Coder & Problem Solver </h3>

                        <p className="text-sm text-muted-foreground"> I have a strong foundation in programming, with proficiency in C, C++, Java, and Python. 
                            My experience spans from building efficient algorithms and data structures to developing real-world applications. 
                            Alongside these core languages, I also work with HTML, CSS, and JavaScript for web development, allowing me to design and implement full-stack projects with both functionality and visual appeal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {""}
                                Get in touch
                            </a>

                            <a className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {""}
                            Download CV
                            </a>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"></Code>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">FrontEnd Engineering
                                    </h4>
                                    <p className="text-sm text-muted-foreground">Creating modern, responsive user interfaces
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                <User className="h-6 w-6 text-primary"></User>
                                </div>

                                    <div className="text-left">
                                    <h4 className="font-semibold text-lg">Cloud & Automation
                                    </h4>
                                    <p className="text-sm text-muted-foreground">Automating deployments and hosting applications
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                                </div>
                                    <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI Innovation
                                    </h4>
                                    <p className="text-sm text-muted-foreground">Experimenting with models & intelligent applications
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    </section>
}