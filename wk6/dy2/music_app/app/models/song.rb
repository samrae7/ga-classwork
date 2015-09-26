class Song < ActiveRecord::Base
   mount_uploader :cover, CoverUploader
end
