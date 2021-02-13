/*
    批量将形如：
    no1:
        photo: /medias/secretariat/personalPhotos/1.jpg
        name: 马昕
        nickname: 拾壹
        birthday: 2000/11/30
        position: 部长
    的信息处理成：
    Person("马昕", "秘书处", "11", "30");
*/

#include<bits/stdc++.h>
using namespace std;

int main(){
    freopen("ymlType", "r", stdin);
    freopen("jsType", "w", stdout);

    string word, depart;
    int year, month, day, index;
    cin>>depart;
    cin>>index;
    while(cin>>word){
        cin>>word>>word>>word;
        cin>>word;
        cout<<"allPerson["<<index<<"] = new ckcPerson(\""<<word<<"\", \""<<depart<<"\", ";
        cin>>word;
        cin>>word>>word;              //如果没有nickname就把这行注释掉
        scanf("%d/%d/%d", &year, &month, &day);
        cout<<month<<", "<<day<<");"<<endl;
        cin>>word>>word;
        index ++;
    }

    return 0;
}