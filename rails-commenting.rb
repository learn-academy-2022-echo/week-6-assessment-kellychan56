# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
  # Methods can be created in the BlogPostsController to allow users to interact with the blog post database and table. It is a connection between the model and the view in the MVC structure. In websites, the controller provides methods that can be used in the views, but for APIs, there is no need for a view and the controller simply provides the methods to receive requests, retrieve data, and send responses.
class BlogPostsController < ApplicationController
  def index
    # ---2)
      # The index method is a convention for showing all the data in a database. So, an instance variable named posts is created and assigned to all of the data in BLogPost. BlogPost.all goes to the model named BlogPost and retrieves all of the data that it holds, returning it in the form of an array.
    @posts = BlogPost.all
  end

  # ---3)
    # The show method is the convention for retrieving one item in the model. We assign the instance variable named post to one data entry in the blogposts table, which is retrieved through the unique id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
    # The new method is the convention for retrieving the information needed to create a new data entry. It creates a form where the user can input the data that can be used to make a new entry in the database table.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
      # The create method allows us to add new information to the database. The instance variable post is assigned to the create query, and it creates a new blog post entry into the database with the title and content parameters that are established in the private section of  the code.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
      # The edit method is the convention for changing the information in one data entry. It takes one entry in the database by retrieving its id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
      # After an exisiting blog post has been retrieved and the edit form has been filled, the post can be updated to reflect the changes made by the user. The parameters are the title and content parameters from the private section of the code.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
        # If the blog post that the user wants to destroy is not destroyed, the user will be redirected back to the blog post that they were trying to destroy.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
    # The private section provides security for the code. Any method written under the private keyword can only be called within the class it was defined in.
  private
  def blog_post_params
    # ---10)
      # The strong params for the class is written within this method. This code states that for the blog post table, there are title and content columns where the values are secured.
    params.require(:blog_post).permit(:title, :content)
  end
end
