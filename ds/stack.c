#include <stdio.h>
int isfull(int arr[],int size, int top)
{
    if (size == top)
        return  0;
    else
        return 1;
}
int isempty(int arr[],int top)
{
    
    if (top == NULL)
    {
        return 0;
    }
    else
        return 1;

}
int push(int arr[],int item,int size,int top)
{
    if (isfull(arr[],size,top))
    {
        arr[top+1]=item;
        top+=1;
        return top;
    }
    else
    {
        print("ARRAY OVERFLOW ERROR");
        return top;
    }
}
int pop(int arr[],int top)
{
        if (isempty(arr[],top))
        {
            top=top-1;
            printf("%d is the popped element",arr[top]);
            return top;

        }

}

int  main()
{
    int size,ch,top;
    top=NULL;
    printf("ENTER THE SIZE OF THE ARRAY: ");
    scanf("%d",&size);
    int arr[size];
    while(true)
    {
        printf("1.PUSH 2.POP 3.EXIT\n");
        scanf("%d",&ch);
        if (ch==1)
        {
            int item;
            printf("ENTER Number: ");
            scanf("%d",&item);
            top=push(arr[size],item,top);
        }
        else if (ch==2)
        {
            top=pop(arr[size],top);
        }
        else if (ch==3)
            return 0;
    }
}