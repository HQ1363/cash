from rest_framework import serializers
from cash_article.serializers import ArticleViewSetListSerializer


class TagViewSetListSerializer(serializers.Serializer):
    name = serializers.CharField()
    article_count = serializers.IntegerField()


class TagViewSetRetrieveSerializer(ArticleViewSetListSerializer):
    pass
