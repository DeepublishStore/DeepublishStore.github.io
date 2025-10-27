import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-secondary/20 via-background to-primary/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DeepublishStore</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in academic and professional publishing since 2010
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DeepublishStore was founded with a simple mission: to make quality academic and professional books accessible to everyone. We believe that knowledge should be available to all who seek it, and we've built our business on this principle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we've grown from a small bookstore to a comprehensive online platform serving thousands of students, researchers, and professionals across the globe. Our collection includes textbooks, research publications, professional development resources, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work directly with publishers and authors to bring you the latest and most relevant titles in your field. Our commitment to quality, affordability, and customer service has made us a trusted name in academic publishing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Books Published</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">50K+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">Quality Guaranteed</p>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Quality First</h3>
                  <p className="text-muted-foreground">
                    We carefully curate our collection to ensure every book meets our high standards for academic excellence and professional relevance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Accessibility</h3>
                  <p className="text-muted-foreground">
                    We believe knowledge should be accessible to all. That's why we offer competitive pricing and regular promotions to make books affordable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Customer Service</h3>
                  <p className="text-muted-foreground">
                    Our dedicated team is here to help you find exactly what you need and ensure a smooth shopping experience from start to finish.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously improve our platform and services to provide you with the best possible online bookstore experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
