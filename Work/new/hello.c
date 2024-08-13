#include <stdio.h>
#include <stdlib.h>
struct string
{
    char a[10];
};

int main()
{

    FILE *b1 = fopen("new.txt", "w+");

    char c[20];
    if (b1 == NULL)
    {
        printf("File not found");
    }

    else
    {
        printf("File found");
        fprintf(b1, "%s", "azeem Hello hy\n");
        printf("%s", fgets(c, 20, b1));
    }

    fclose(b1);

    return 0;
}