import os
class Tree:
    def __init__(self):
        self.count=0
        self.newPath=""
        self.newPath0=""
        self.str0=""
    def path(self,path,b=False):
        if b and (path[-1]=='/'):
            return path
        elif b:
            return path+'/'
        elif path[-1]=='/':
            for i in range(len(path)-1):
                self.newPath+=path[i]
            return self.newPath
        else:
            return path
    def tree(self,path,j=0):
        if self.count==0:
            self.newPath0=self.path(path)
            self.count+=1
            path=self.newPath0
        for i in os.listdir(path+'/'):
            str0= str(j)+'>'+i
            print str0
            j+=1
            if os.path.isdir(path+'/'+i):
                self.tree(path+'/'+i,j)
            j-=1
