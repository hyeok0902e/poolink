from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class UserDetailSeiralizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
        ]

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password',
        ]
        extra_kwargs = {"password":{"write_only": True}}
    
    def create(self, vaildated_data):
        email = vaildated_data['email']
        username = vaildated_data['username']
        password = vaildated_data['password']
        user_obj = User(
            email = email,
            username = username
        )
        user_obj.set_password(password)
        user_obj.save()
        return vaildated_data


class UserLoginSerializer(serializers.ModelSerializer):
    token = serializers.CharField(allow_blank=True, read_only=True)
    email = serializers.EmailField(label='Email')
    
    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'token',
        ]

        extra_kwargs = {"password":{"write_only": True}}

    def validate(self, data):
        user_obj = None
        email = data.get('email', None)
        password = data['password']
        
        if not email:
            raise serializers.VaildationError("Email is required")

        try:
            user = User.objects.get(email=email)
        except BaseException as e:
            raise serializers.ValidationError("Email is not valid.")
        else:
            user_obj = user
            
        if user_obj:
            if not user_obj.check_password(password):
                raise serializers.ValidationError("Incorrect credentials")
        
        data['token'] = 'SOME TOKEN'

        return data
