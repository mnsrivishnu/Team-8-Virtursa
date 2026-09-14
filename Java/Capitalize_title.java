class Solution {
    public String capitalizeTitle(String str) {
        StringBuilder sb=new StringBuilder();

        for(char ch:str.toCharArray())
        {
            sb.append(Character.toLowerCase(ch));

        }
        String temp=sb.toString();
        char ch[]=temp.toCharArray();
        int start=0;
        
        for(int i=0;i<=ch.length;i++)
        {
            
            if(i==ch.length || ch[i]==' ' )
            {
                int length=i-start;

                if(length>=3)
                {
                    ch[start]=Character.toUpperCase(ch[start]);
                }
                start=i+1;

            }
        }
            return new String(ch);
        
        
    }
}
